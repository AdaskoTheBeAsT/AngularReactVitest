import fs from 'fs';
import path from 'path'

interface Input{
  file: string;
  replacement:string;
};

export default function replaceFile({file,replacement}:Input){
  const absolutePath = path.normalize(path.resolve(process.cwd(), file));
  const targetPath = path.normalize(path.resolve(process.cwd(), replacement));


  return{
    name: 'replace-file',
    async load(id: string) {
      if (path.normalize(id) === absolutePath) {
        const content = await fs.promises.readFile(targetPath, 'utf-8');
        return content;
      }

      // other ids should be handled as usually
      return null;
    }
  }
}
