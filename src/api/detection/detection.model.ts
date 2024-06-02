import { conf } from '../../common/conf';
import * as tf from '@tensorflow/tfjs-node';
import * as fs from 'fs';
import { UnprocessableEntityException } from '../../common/exceptions';

class DetectionModel {
  private model: tf.GraphModel | undefined;
  private labels: string[] | [];

  private async loadModel() {
    if (!this.model) {
      this.model = await tf.loadGraphModel(conf.model.url);
    }
  }

  private async loadLabels() {
    if (!this.labels) {
      const jsonObject = JSON.parse(fs.readFileSync(conf.model.labels, 'utf8'));
      this.labels = Object.keys(jsonObject).map((key) => jsonObject[key]);
    }
  }

  async predict(image: Buffer) {
    try {
      await this.loadModel();
      await this.loadLabels();

      const tensor = tf.node
        .decodeImage(image, 3)
        .resizeNearestNeighbor([180, 180])
        .expandDims()
        .toFloat();

      const prediction = this.model!.predict(tensor) as tf.Tensor;
      const data = await prediction.data();

      const maxIndex = data.indexOf(Math.max(...data));

      return this.labels[maxIndex];
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}

export default new DetectionModel();
