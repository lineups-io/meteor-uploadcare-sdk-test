import React from 'react';
import * as LR from '@uploadcare/blocks';

import './Upload.css'

LR.registerBlocks(LR);

export const Upload = () =>
  <lr-file-uploader-regular
    css-src='https://esm.sh/@uploadcare/blocks@0.25.0/web/file-uploader-regular.min.css'
    ctx-name='my-uploader'
    className='my-config'
  >
  </lr-file-uploader-regular>
