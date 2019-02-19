const gitalk = new Gitalk({
  // https://github.com/settings/applications/new  申请 clientID & clientSecret
  clientID: '0cb14fdc86c03adaabf5',
  clientSecret: '7270652ed40800d7e6315cab44e059d046d9d48d',
  repo: 'CSS-Track',
  owner: 'AlvinMi',
  admin: ['AlvinMi'],
  distractionFreeMode: true,
  id: md5(window.location.hash)   //页面的唯一标识，gitalk 会根据这个标识自动创建的 issue 的标签,我们使用页面的相对路径作为标识
})

window.gitalk = gitalk;

gitalk.render('app');
