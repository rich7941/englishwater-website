import metaData from '../../META_TITLES_DESCRIPTIONS.json';

export interface PageMetadata {
  title: string;
  description: string;
  path: string;
  page: string;
}

export const getPageMetadata = (pathname: string): PageMetadata | null => {
  // Normalize the pathname
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  
  // Find matching metadata
  const pageData = metaData.pages.find(p => p.path === normalizedPath);
  
  if (pageData) {
    return {
      title: pageData.title,
      description: pageData.description,
      path: pageData.path,
      page: pageData.page
    };
  }
  
  return null;
};

export const updatePageMetadata = (metadata: PageMetadata | null) => {
  if (!metadata) return;
  
  // Update title
  document.title = metadata.title;
  
  // Update or create meta description
  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (!descriptionMeta) {
    descriptionMeta = document.createElement('meta');
    descriptionMeta.setAttribute('name', 'description');
    document.head.appendChild(descriptionMeta);
  }
  descriptionMeta.setAttribute('content', metadata.description);
  
  // Update og:title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.setAttribute('content', metadata.title);
  
  // Update og:description
  let ogDescription = document.querySelector('meta[property="og:description"]');
  if (!ogDescription) {
    ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    document.head.appendChild(ogDescription);
  }
  ogDescription.setAttribute('content', metadata.description);
};
