import CMS from 'netlify-cms-app'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProgramsPagePreview from './preview-templates/ProgramsPagePreview'
import AdmissionsPagePreview from './preview-templates/AdmissionsPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('programs', ProgramsPagePreview)
CMS.registerPreviewTemplate('admissions', AdmissionsPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
