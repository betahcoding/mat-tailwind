import fs from 'fs';

const getDirectories = (dirPath: string, excludes: string[] = []) => {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && !excludes.includes(dirent.name))
    .map((folder) => folder.name);
};

export { getDirectories };
