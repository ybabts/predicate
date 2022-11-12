
export default {
    hello: () => {
        return 'Hello World!';
    },
    name: (name: string) => {
        return `My name is ${name}`
    },
    write: (target: number, value: Record<string, unknown>) => {
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