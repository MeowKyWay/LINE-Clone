import { InvokeCommandOutput, Lambda } from "@aws-sdk/client-lambda";
import { fetchAuthSession } from "aws-amplify/auth";

export enum LambdaARN {
    ADD_FRIEND = "LINEClone-AddFriend",
}

export async function invokeLambda ( {arn, body}: { 
    arn: LambdaARN, 
    body?: object 
}) {
    const lambda = new Lambda({
        region: 'ap-southeast-1',
        credentials: (await fetchAuthSession()).credentials
    })

    const res = await lambda.invoke({
        FunctionName: arn,
        Payload: JSON.stringify(body)
    })

    return lambdaDecode(res);
}

export function lambdaDecode (response: InvokeCommandOutput) {
    const decoder = new TextDecoder('utf-8');
    const payload = JSON.parse(decoder.decode(response.Payload));
    const body = JSON.parse(payload.body);
    return body;
}