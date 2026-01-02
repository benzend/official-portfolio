import { vemetric } from '@vemetric/web';

export function register() {
  vemetric.init({
    token: process.env.NEXT_PUBLIC_VEMETRIC_TOKEN!,
  });
}
