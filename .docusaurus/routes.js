
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/测试博客',
    component: ComponentCreator('/测试博客','d52'),
    exact: true
  },
  {
    path: '/你好',
    component: ComponentCreator('/你好','d2e'),
    exact: true
  },
  {
    path: '/archive',
    component: ComponentCreator('/archive','72e'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','af7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
