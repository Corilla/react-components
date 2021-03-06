import React, { PropTypes } from 'react';
import markdownItSanitizer from 'markdown-it-sanitizer';
import markdownItImsize from 'markdown-it-imsize';
import markdownIt from 'markdown-it';

const md = markdownIt({
  breaks: true,
  linkify: true,
  html: true,
}).use(markdownItSanitizer)
.use(markdownItImsize);

const rawMarkup = (text) => ({__html: md.render(text || '')});

const MarkdownPreview = ({text, ...rest}) => (
  <div {...rest} dangerouslySetInnerHTML={rawMarkup(text)} />
);

MarkdownPreview.propTypes = {
  text: PropTypes.string,
};

export default MarkdownPreview;
