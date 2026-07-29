import { WebviewWindow } from '@tauri-apps/api/webviewWindow';

export const createStickyWindow = async () => {
  const label = `note-${Date.now()}`;

  const window = new WebviewWindow(label, {
    title: 'Note',
    width: 300,
    height: 300,
    decorations: false,
    alwaysOnTop: true,
    center: true,
    url: '/map',
  });

  window.once('tauri://window-created', () => {
    console.log('created');
  });

  window.once('tauri://error', (e) => {
    console.error(e);
  });
};
