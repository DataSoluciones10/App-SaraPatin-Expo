

import { Link } from 'expo-router';


const ThemedLink = ({ style, color, ...rest }: any) => {

    return (
      <Link style={[style]} {...rest} />
    );

};


export default ThemedLink;