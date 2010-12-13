import os
from google.appengine.ext.webapp import template

path = os.path.join(os.path.dirname(__file__) + '/templates', 'index.html')
print template.render(path, {})
