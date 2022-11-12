
export const client = {
    write: function write(target: number, value: Record<string, unknown>) {
        self.postMessage({
            action: {
                name: 'write',
                target,
                value
            }
        });
        return value;
    }
}

export const server = {
    write: function write(msg: MessageEvent, data: Record<string, any>[]) {
        data[msg.data.action.target] = msg.data.action.value;
    }
}

export default {
    server, client
}
