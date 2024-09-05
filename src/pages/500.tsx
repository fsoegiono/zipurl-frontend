import React from 'react';

import CustomError from '@/components/CustomError';
import { CUSTOM_500_CONSTANT } from '@/constants';

const Custom500: React.FC = () => {
  return ( <CustomError {...CUSTOM_500_CONSTANT} /> );
};

export default Custom500;