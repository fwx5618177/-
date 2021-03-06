class Emitter {
    constructor(max) {
        this.max = max;
        this.asyncIdx = 0;
    }
    // 异步迭代器的API
    async *[Symbol.asyncIterator] () {
        while(this.asyncIdx < this.max) {
            yield new Promise((resolve) => resolve(this.asyncIdx++));
        }
    }
}

async function asyncCount() {
    let emitter = new Emitter(5);

    // 循环时，异步迭代操作
    for await(const x of emitter){
        console.log(x);
    }
}

asyncCount();