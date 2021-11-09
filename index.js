
const prompt = require ('prompt');
prompt.start ();

const displayFibonacciSeries = async (limit = 0) => {
    
    let n1 = 0, n2 = 1, nextTerm = undefined;

    if (limit <= 0) {
        throw new Error ('Limit must be > 0');
    }

    for (let i = 1;i <= limit;i++) {
        console.log (n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

}

const takeUserInput = () => {
    return new Promise ((resolve, reject) => {
        prompt.get (['number'], function (error, result) {
            if (error) {
                reject ('Cannot get user input');
            } else if (!result.number || !+result.number) {
                reject ('Please enter a valid number value');
            } else {
                resolve ({ number: result.number });
            }
        })
    })
}

const main = async () => {
    
    try {
        
        const { number } = await takeUserInput ();
        await displayFibonacciSeries (number);

    } catch (error) {
        console.log (`Error: ${error}`);
    }

}

main ();