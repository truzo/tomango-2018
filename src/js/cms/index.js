import React from 'react'
import CMS from 'netlify-cms'

import PostPreview from './templates/post'

CMS.registerPreviewStyle('/css/main.css')
CMS.registerPreviewTemplate('post', PostPreview)
