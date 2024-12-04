

import { Link } from 'expo-router';


export const ThemedLink = ({ style, color, ...rest }: any) => {

    return (
      <Link style={[style]} {...rest} />
    );

};

