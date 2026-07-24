import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const focusAreas = [
  {
    number: '01',
    title: '探索新技术',
    description: '保持对新工具与新范式的敏感，把好奇心变成可落地的实践。',
    tag: 'EXPLORE',
  },
  {
    number: '02',
    title: '打磨体验',
    description: '从细节、性能到可访问性，让产品不仅能用，而且自然好用。',
    tag: 'CRAFT',
  },
  {
    number: '03',
    title: '持续沉淀',
    description: '用写作整理思考，让每一次踩坑都成为下一次出发的路标。',
    tag: 'SHARE',
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <Layout
      title="首页"
      description="陈晓铜的个人主页：Web 开发、技术探索与持续学习。">
      <main className={styles.home}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>
                <span className={styles.statusDot} />
                WEB DEVELOPER · CONTINUOUS LEARNER
              </p>
              <Heading as="h1" className={styles.heroTitle}>
                你好，我是陈晓铜。
                <span>把新的想法，做成真正好用的 Web 体验。</span>
              </Heading>
              <p className={styles.heroDescription}>
                一名喜欢尝试、乐于钻研的 Web Developer。
                我相信持续的小步前进，最终会汇成值得分享的作品与经验。
              </p>
              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} to="/blog">
                  阅读博客 <span aria-hidden="true">→</span>
                </Link>
                <Link
                  className={styles.secondaryButton}
                  href="https://github.com/Nicolerobinn">
                  查看 GitHub <ArrowIcon />
                </Link>
              </div>
              <div className={styles.currently}>
                <span>目前关注</span>
                <ul>
                  <li>Web 工程化</li>
                  <li>交互体验</li>
                  <li>技术写作</li>
                </ul>
              </div>
            </div>

            <div className={styles.heroVisual} aria-label="陈晓铜的开发者名片">
              <div className={styles.avatarFrame}>
                <img
                  src="/img/avatar.jpg"
                  alt="陈晓铜"
                  className={styles.avatar}
                  width="320"
                  height="320"
                />
                <span className={styles.avatarLabel}>CX · 97</span>
              </div>
              <div className={styles.codeCard}>
                <div className={styles.codeCardHeader}>
                  <span />
                  <span />
                  <span />
                  <p>profile.js</p>
                </div>
                <pre aria-hidden="true">
                  <code>
                    <span>const</span> xiaotong = {'{\n'}
                    {'  '}role: <em>&apos;Web Developer&apos;</em>,{'\n'}
                    {'  '}curiosity: <strong>Infinity</strong>,{'\n'}
                    {'  '}shipping: <strong>true</strong>,{'\n'}
                    {'}'};
                  </code>
                </pre>
              </div>
              <div className={styles.orbit} aria-hidden="true">
                <span>BUILD</span>
                <span>LEARN</span>
                <span>SHARE</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.focusSection}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.sectionKicker}>WHAT I VALUE</p>
                <Heading as="h2">我在意的事</Heading>
              </div>
              <p>
                技术会持续变化，但对真实问题的关注、
                对体验的耐心和持续学习的习惯不会过时。
              </p>
            </div>
            <div className={styles.focusGrid}>
              {focusAreas.map((item) => (
                <article className={styles.focusCard} key={item.number}>
                  <div className={styles.cardMeta}>
                    <span>{item.number}</span>
                    <span>{item.tag}</span>
                  </div>
                  <Heading as="h3">{item.title}</Heading>
                  <p>{item.description}</p>
                  <span className={styles.cardArrow} aria-hidden="true">
                    ↗
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className={`container ${styles.aboutGrid}`}>
            <div className={styles.aboutLabel}>
              <span>ABOUT</span>
              <span>关于我</span>
            </div>
            <div className={styles.aboutCopy}>
              <Heading as="h2" id="about">
                从东北出发，
                <br />
                向更大的技术世界保持好奇。
              </Heading>
              <div className={styles.aboutBody}>
                <p>
                  我叫陈晓铜，是一名 Web Developer，97
                  年的尾巴，家在黑龙江边境的一座小城。
                </p>
                <p>
                  我喜欢研究新的点子，也享受把复杂问题拆解清楚的过程。
                  这里记录我的技术实践、思考与成长，希望每一次分享都能带来一点新的启发。
                </p>
              </div>
              <Link className={styles.textLink} to="/blog/你好">
                读我的自我介绍 <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.writingSection}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.sectionKicker}>RECENT WRITING</p>
                <Heading as="h2">最近在写</Heading>
              </div>
              <Link className={styles.textLink} to="/blog">
                查看全部文章 <span aria-hidden="true">→</span>
              </Link>
            </div>
            <Link className={styles.articleCard} to="/blog/你好">
              <div className={styles.articleDate}>
                <span>26</span>
                <span>AUG · 2021</span>
              </div>
              <div className={styles.articleContent}>
                <span className={styles.articleType}>自我介绍 · 1 MIN READ</span>
                <Heading as="h3">你好 👋</Heading>
                <p>
                  关于我从哪里来、为什么喜欢 Web 开发，以及我想在这里持续记录什么。
                </p>
              </div>
              <span className={styles.articleArrow} aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={`container ${styles.ctaInner}`}>
            <p>KEEP IN TOUCH</p>
            <Heading as="h2">有好点子？一起聊聊。</Heading>
            <Link
              className={styles.ctaLink}
              href="https://github.com/Nicolerobinn">
              在 GitHub 找到我 <ArrowIcon />
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
