import chunk from 'lodash/chunk';

const styles = { width: '40px', height: '40px', float: 'left', textAlign: 'center' };

return (

        <div className="tic-tac-toe-container">
            {chunk(new Array(9).fill(0), 3).map((item, itemIndex) => {
                return (
                    <div key={itemIndex} className="row">
                        {item.map(col => <div className="col" style={styles}>COL</div>)}
                    </div>
                )
            })
            }
        </div>
    );