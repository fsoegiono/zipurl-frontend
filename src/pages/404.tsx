import React from 'react';

import CustomError from '@/components/CustomError';
import { CUSTOM_404_CONSTANT } from '@/constants';

const Custom404: React.FC = () => {
  return ( <CustomError {...CUSTOM_404_CONSTANT} /> );
};

export default Custom404;