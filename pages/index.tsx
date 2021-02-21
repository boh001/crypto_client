import { NextPage } from "next"
import socket from "utils/socket"

import Portfolio from 'components/Portfolio'
import CandleCharts from "components/CandleCharts"
import '../utils/chart'

type Props = {}

const IndexPage: NextPage<Props> = () => (
  <>
    <div>hihi</div>
    <Portfolio />
    <button onClick={() => socket.emit('test', 'test')}>emit</button>
    <CandleCharts />
  </>
)

export default IndexPage
