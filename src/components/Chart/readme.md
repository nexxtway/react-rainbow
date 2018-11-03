Chart base:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCog,
        faEllipsisV,
    } = require('@fortawesome/free-solid-svg-icons');

    class ChartExample extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                labels: ['A', 'B', 'C', 'D'],
                dataset1: [23,45,123,56],
                dataset2: [66,100,30,156],
            }
        }

        handleOnClick() {
            this.setState({
                labels: ['A', 'B', 'C', 'D', 'E'],
                dataset1: [23,45,123,56, 180],
                dataset2: [66,100,30,156, 70],
            });
        }

        render() {
            const { labels, dataset1, dataset2 } = this.state;

            return (
                <div className="rainbow-p-bottom_xx-large">
                    <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
                        <ButtonGroup className="rainbow-m-right_medium">
                            <ButtonIcon variant="border-filled" onClick={() => this.handleOnClick()} icon={<FontAwesomeIcon icon={faCog} />} />
                            <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faEllipsisV} />} />
                        </ButtonGroup>
                    </GlobalHeader>
                    <div className="rainbow-align-content_center">
                        <Chart labels={labels} type="line">
                            <Dataset title="Dataset 1" values={dataset1} backgroundColor={'#1de9b6'} />
                            <Dataset title="Dataset 2" values={dataset2} backgroundColor={'#01b6f5'} />
                        </Chart>
                    </div>
                </div>
            );
        }
    }

    <ChartExample />
