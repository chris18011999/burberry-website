"use client";

import { useEffect, useState } from "react";

export function OfflineNotifier() {
  const [online, setOnline] = useState(false);

  const _setOnline = () => {console.log('online'); setOnline(true)}
  const _setOffline = () => {console.log('offline'); setOnline(false)}

  useEffect(() => {
    setOnline(global?.navigator?.onLine);
  }, [])

  useEffect(() => {
    window.addEventListener('offline', _setOnline)
    window.addEventListener('online', _setOffline)

    return () => {
      window.removeEventListener('offline', _setOnline)
      window.removeEventListener('online', _setOffline)
    }
  }, [online])

  return <div className="fixed w-full p-5 bottom-0 text-center bg-slate-100 border-t-1 border-color-primary">{online ? "Online" : "Offline"}</div>
}