import * as fs from 'fs';
import * as path from 'path';

const baseDir = path.resolve(__dirname, '../../out');

export function saveFile(fileName: string, buf: Buffer): void {
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir);
  }

  fs.writeFileSync(path.resolve(baseDir, fileName), buf);
}
