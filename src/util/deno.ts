export function parseUserAgent(useragent: string) {
  const [runtime, version] = useragent.split('/');
  return {
    runtime,
    version
  }
}

export function isUserAgentDeno(useragent: string) {
  const runtime = useragent.slice(0, useragent.indexOf('/'));
  return runtime === 'Deno';
}