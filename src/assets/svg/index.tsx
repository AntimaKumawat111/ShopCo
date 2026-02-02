import {DarkTheme, useTheme} from '../../helper/color';
import {IconName, ICONS} from './icon';

type IconProps = {
  width: number;
  height: number;
};

type SvgIconsProps = IconProps & {
  name: IconName;
};

const SvgIcon = ({name, width, height}: SvgIconsProps) => {
  const theme = useTheme();
  const isDarkTheme = theme.background === DarkTheme.background;

  const IconComponent = isDarkTheme ? ICONS[name].dark : ICONS[name].light;

  return (
    <>
      <IconComponent width={width} height={height} />
    </>
  );
};

export default SvgIcon;
