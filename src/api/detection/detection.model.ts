import { conf } from '../../common/conf';
import * as tf from '@tensorflow/tfjs-node';
import { skinConditions } from './detection.constant';
import { UnprocessableEntityException } from '../../common/exceptions';

class DetectionModel {
  private model: tf.GraphModel | undefined;

  private async loadModel() {
    if (!this.model) {
      try {
        this.model = await tf.loadGraphModel(conf.model.url);
      } catch (error) {
        throw new UnprocessableEntityException('Failed to load model');
      }
    }
  }

  async predict(image: Buffer) {
    await this.loadModel();

    try {
      const tensor = tf.node
        .decodeImage(image, 3)
        .resizeNearestNeighbor([300, 300])
        .toFloat()
        .div(tf.scalar(255.0))
        .expandDims();

      const prediction = this.model!.predict(tensor) as tf.Tensor;
      const data = await prediction.data();

      const maxIndex = data.indexOf(Math.max(...data));

      return skinConditions[maxIndex];
    } catch (error) {
      throw new UnprocessableEntityException(
        error || 'Failed to predict input',
      );
    }
  }
}

export default new DetectionModel();
