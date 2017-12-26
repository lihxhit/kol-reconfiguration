// pages/index.js
import Link from 'next/link'

export default () =>
    <div>
        Click{' '}
        <Link prefetch href="/about">
            <a>here</a>
        </Link>{' '}
        to read more
  </div>