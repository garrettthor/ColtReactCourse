function s1() {
    const result = Math.floor(Math.random() * 3) + 1;
    return result;
};

function s2() {
    const result = Math.floor(Math.random() * 3) + 1;
    return result;
};

function s3() {
    const result = Math.floor(Math.random() * 3) + 1;
    return result;
};

class Machine extends React.Component {
    render() {
        const s1result = s1();
        let fruit1;
        if (s1result === 1) {
            fruit1 = 'cherry'
        } else if (s1result === 2) {
            fruit1 = 'orange'
        } else if (s1result === 3) {
            fruit1 = 'lemon'
        };

        const s2result = s2();
        let fruit2;
        if (s2result === 1) {
            fruit2 = 'cherry'
        } else if (s2result === 2) {
            fruit2 = 'orange'
        } else if (s2result === 3) {
            fruit2 = 'lemon'
        };

        const s3result = s3();
        let fruit3;
        if (s3result === 1) {
            fruit3 = 'cherry'
        } else if (s3result === 2) {
            fruit3 = 'orange'
        } else if (s3result === 3) {
            fruit3 = 'lemon'
        };

        let winner = false

        if (fruit1 === 'cherry' && fruit2 === 'cherry' && fruit3 === 'cherry'){
            winner = true
        };

        let msg;

        if (winner === true) {
            msg = 'Winner!'
        }

        return(
            <div>
                <h1>Slot:</h1>
                {fruit1} {fruit2} {fruit3} <h2>{msg}</h2>
            </div>
        )
    }
}