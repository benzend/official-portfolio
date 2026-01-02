import { vemetric } from '@vemetric/web';

export function register() {
  if (typeof window !== 'undefined') {
    vemetric.init({
      token: process.env.NEXT_PUBLIC_VEMETRIC_TOKEN!,
    });
  }
}
