import packageJson from "package-json";
import {useEffect, useState} from "react";
import $styles from './VersionBadge.module.scss'

const VersionBadge = () => {
  const [version, setVersion] = useState('');

  useEffect(() => {
    packageJson('apiit').then(({ version }) => {
      setVersion(version as string);
    })
  }, [1])

  return (
    <span className={$styles.versionBadge}>
      {version}
    </span>
  )
}

export default VersionBadge;
