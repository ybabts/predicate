/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

setTimeout(() => {
    postMessage('I died');
    close();
}, 5000)