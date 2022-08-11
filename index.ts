import {APIGatewayEvent, APIGatewayProxyResult, Context} from 'aws-lambda';
import * as os from 'os';

/**
 * Follow the guide https://docs.aws.amazon.com/lambda/latest/dg/typescript-handler.html
 * @param event
 * @param context
 */
export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        osName: os.hostname(),
        osPlatform: os.platform(),
        osCPU: os.cpus(),
        osMemory: os.totalmem() / 1048576, // 1mb = 1048576
      },
      null,
      2
    ),
  };
};
