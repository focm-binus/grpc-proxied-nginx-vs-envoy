import grpc from 'k6/net/grpc';
import { check, sleep } from 'k6';

const client = new grpc.Client();
client.load([''], 'helloworld.proto');

export const options = {
    vus: 10,
    duration: '30s',
};

export default () => {
    client.connect(`${__ENV.MY_HOSTNAME}`, { plaintext: true })

    const data = { name: 'k6' };
    const response = client.invoke('helloworld.Greeter/SayHello', data);

    check(response, {
        'status is OK': (r) => r && r.status === grpc.StatusOK,
    });

    // console.log(JSON.stringify(response.message));

    client.close();
    sleep(1);
};