import { vemetric } from '@vemetric/web';

if (process.env.NEXT_PUBLIC_VEMETRIC_TOKEN === undefined) {
  console.warn('Vemetric token not set');
} else {
  console.debug('Vemetric token set');
}

vemetric.init({
  token: process.env.NEXT_PUBLIC_VEMETRIC_TOKEN!,
});
