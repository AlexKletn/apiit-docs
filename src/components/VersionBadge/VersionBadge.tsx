import packageJson from "package-json";
import {useEffect, useState} from "react";
import $styles from './VersionBadge.module.scss'

const VersionBadge = () => {
  const [version, setVersion] = useState<string>();

  useEffect(() => {
    packageJson('apiit').then(({ version }) => {
      setVersion(version as string);
    })
  }, [1])

  return (
    <span className={$styles.versionBadge}>
      {version ?? 'Loading'}
    </span>
  )
}

export default VersionBadge;
