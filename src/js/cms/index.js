import React from 'react'
import CMS from 'netlify-cms'

import PostPreview from './templates/post'
import Checkbox from './fields/checkbox'

CMS.registerPreviewStyle('/css/main.css')
CMS.registerPreviewTemplate('post', PostPreview)
CMS.registerWidget('checkbox', Checkbox)
