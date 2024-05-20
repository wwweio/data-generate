import { Modal } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { CheckCircleFilled } from '@ant-design/icons'
import { setColorPrimary } from '@/store/slices/theme'
import { globalConfig } from '@/globalConfig'
import './themeModal.css'

function ThemeModal({ onClose }) {
    // redux 钩子
    const dispatch = useDispatch()

    // 获取主题颜色
    const theme = useSelector((state) => state.theme)

    return (
        <Modal
            className="M-themeModal"
            open={true}
            title="主题颜色"
            onCancel={() => onClose()}
            footer={null}
            maskClosable={false}
        >
            <div className="colors-con">
            {
                // 遍历globalConfig配置的customColorPrimarys主题色
                globalConfig.customColorPrimarys &&
                    globalConfig.customColorPrimarys.map((item, index) => {
                        return (
                            <div
                                className="theme-color"
                                style={{ backgroundColor: item }}
                                key={index}
                                onClick={() => {
                                    dispatch(setColorPrimary(item))
                                }}
                            >
                                {
                                    // 如果是当前主题色，则显示“对勾”图标
                                    theme.colorPrimary === item && (
                                        <CheckCircleFilled
                                            style={{
                                                fontSize: 28,
                                                color: '#fff',
                                            }}
                                        />
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        </Modal>
    )
}

export default ThemeModal