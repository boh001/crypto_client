import { NextPage } from "next"
import socket from "utils/socket"

import Portfolio from 'components/Portfolio'

type Props = {}

const IndexPage: NextPage<Props> = () => (
  <>
    <div>hihi</div>
    <Portfolio />
    <button onClick={() => socket.emit('test', 'test')}>emit</button>
  </>
)

export default IndexPage
