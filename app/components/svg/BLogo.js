export const BLogo = ({fill = "#f1f1f1", height = "48", width = "22"}) => {
    return (
        <svg  width={width} height={height} viewBox="0 0 22 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4L8 0V33.6495L0 48V4Z" fill={fill} />
            <path d="M8 0H22L14 4H0L8 0Z" fill={fill} />
            <path d="M8 13H22L14 17H0L8 13Z" fill={fill} />
            <path d="M8 26H22L14 30H0L8 26Z" fill={fill} />
            <path d="M14 4L22 0V13L14 17V4Z" fill={fill} />
            <path d="M14 17L22 13V26L14 30V17Z" fill={fill} />
        </svg>
    )
}