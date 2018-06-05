import React from 'react'
import CMS from 'netlify-cms'

import PostPreview from './templates/post'
import Checkbox from './fields/checkbox'
import Youtube from './components/youtube'

CMS.registerPreviewStyle('/css/main.css')
CMS.registerPreviewStyle('/css/cms.css')
CMS.registerEditorComponent(Youtube);
CMS.registerPreviewTemplate('thinks', PostPreview)
CMS.registerWidget('checkbox', Checkbox)