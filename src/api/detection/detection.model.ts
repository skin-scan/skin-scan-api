import { conf } from '../../common/conf';
import * as tf from '@tensorflow/tfjs-node';

class DetectionModel {
  private model: tf.GraphModel | undefined;

  private async loadModel() {
    if (!this.model) {
      this.model = await tf.loadGraphModel(conf.model.url);
    }
  }

  async predict(image: Buffer) {
    await this.loadModel();

    const tensor = tf.node
      .decodeImage(image)
      .resizeNearestNeighbor([224, 224])
      .expandDims()
      .toFloat();

    const prediction = this.model!.predict(tensor) as tf.Tensor;
    const data = await prediction.data();

    console.info(data);
  }
}

export default new DetectionModel();
