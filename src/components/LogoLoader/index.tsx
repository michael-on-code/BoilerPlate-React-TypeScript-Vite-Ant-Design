import { Row } from "antd"
import LogoImg from '~/assets/react.svg'

const LogoLoader = () => {
    return (
        <Row justify="space-around" align="middle">
            <img width={100} src={LogoImg} style={{animation: "zoomInDown 1s"}} />
        </Row>
    )
}

export default LogoLoader