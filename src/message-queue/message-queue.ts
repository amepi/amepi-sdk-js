// import { GetQueueUrlCommand, ReceiveMessageCommand, DeleteMessageCommand, CreateQueueCommand, SQSClient } from "@aws-sdk/client-sqs";
// @see https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html
class MessageQueue {
  constructor() {}
  // createQueue(){}
  // deleteQueue(){}
  listQueues(){}
  getQueueUrl(queueName: string): string {
    // the queue url
    return '';
  }
  // sendMessage(queueName: string, message: string){}
  // receiveMessages(queueName: string){}
  // getQueueAttribute() {}
}

export default MessageQueue;