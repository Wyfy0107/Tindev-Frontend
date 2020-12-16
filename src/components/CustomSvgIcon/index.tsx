type svg = {
	img: string;
};

const CustomSvgIcon = ({ img }: svg) => (
	<img src={img} alt='bottom-right-svg' className='svg-icon' />
);

export default CustomSvgIcon;
