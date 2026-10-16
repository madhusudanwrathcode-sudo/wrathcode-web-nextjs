function playerChrome(title: string, duration: string) {
  const time = duration
    ? `<span class="pointer-events-none absolute right-3 bottom-3 rounded bg-black/85 px-1.5 py-0.5 text-xs font-medium text-white">${duration}</span>`
    : "";
  return `
<span class="pointer-events-none absolute inset-0 bg-black/25"></span>
<span class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></span>
<span class="pointer-events-none absolute bottom-3 left-4 right-16 truncate text-left text-sm font-medium text-white">${title}</span>
${time}
<span class="pointer-events-none absolute top-1/2 left-1/2 grid size-[68px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-black/70 ring-1 ring-white/80">
  <svg viewBox="0 0 24 24" class="ml-1 size-8 fill-white" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
</span>`;
}

function youtubeId(href: string) {
  try {
    const url = new URL(href);
    const host = url.hostname.replace(/^www\./, "");
    if (host === "youtu.be") return url.pathname.split("/").filter(Boolean)[0] ?? null;
    if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
      if (url.pathname === "/watch") return url.searchParams.get("v");
      const [kind, id] = url.pathname.split("/").filter(Boolean);
      if (kind && id && ["embed", "shorts", "live", "v"].includes(kind)) return id;
    }
  } catch {
    return null;
  }
  return null;
}

function vimeoId(href: string) {
  try {
    const url = new URL(href);
    const host = url.hostname.replace(/^www\./, "");
    const parts = url.pathname.split("/").filter(Boolean);
    if (host === "player.vimeo.com" && parts[0] === "video" && /^\d+$/.test(parts[1] ?? "")) return parts[1];
    const id = parts.at(-1);
    if (host === "vimeo.com" && id && /^\d+$/.test(id)) return id;
  } catch {
    return null;
  }
  return null;
}

function fileType(href: string) {
  const path = (() => {
    try {
      return new URL(href).pathname;
    } catch {
      return href;
    }
  })().toLowerCase();
  if (path.endsWith(".webm")) return "video/webm";
  if (path.endsWith(".ogg") || path.endsWith(".ogv")) return "video/ogg";
  if (path.endsWith(".mov")) return "video/quicktime";
  if (path.endsWith(".mp4") || path.endsWith(".m4v") || path.endsWith(".mkv")) return "video/mp4";
  return null;
}

function escapeAttr(value: string) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

export function StoryVideo({ href, label, duration = "" }: { href: string; label: string; duration?: string }) {
  const youtube = youtubeId(href);
  const vimeo = vimeoId(href);
  const type = fileType(href);
  const title = label.replace(/^Watch:\s*/i, "").replace(/^./, (letter) => letter.toUpperCase());
  const embed = youtube
    ? `https://www.youtube.com/embed/${youtube}?autoplay=1&rel=0`
    : vimeo
      ? `https://player.vimeo.com/video/${vimeo}?autoplay=1`
      : null;
  const preview = youtube
    ? `<img src="https://i.ytimg.com/vi/${youtube}/hqdefault.jpg" alt="" class="absolute inset-0 size-full object-cover" />`
    : embed
      ? ""
      : `<video class="pointer-events-none absolute inset-0 size-full bg-black object-cover" playsinline preload="metadata" muted aria-hidden="true"><source src="${escapeAttr(href)}#t=0.5"${type ? ` type="${type}"` : ""} /></video>`;
  const play = `(function(button){var box=button.parentElement;if(${embed ? "true" : "false"}&&!box.querySelector('iframe')){var frame=document.createElement('iframe');frame.src=${JSON.stringify(embed ?? "")};frame.title=${JSON.stringify(label)};frame.className='absolute inset-0 z-10 size-full border-0';frame.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';frame.allowFullscreen=true;box.appendChild(frame);}var video=box.querySelector('video');if(video){video.classList.remove('pointer-events-none');video.muted=false;video.currentTime=0;video.setAttribute('controls','');video.play();}button.hidden=true;box.querySelector('[data-stop]').hidden=false;})(this)`;
  const stop = `(function(button){var box=button.parentElement;var frame=box.querySelector('iframe');if(frame){frame.src='about:blank';frame.remove();}var video=box.querySelector('video');if(video){video.pause();video.removeAttribute('controls');video.classList.add('pointer-events-none');}button.hidden=true;box.querySelector('[data-play]').hidden=false;})(this)`;

  return (
    <div
      className="relative aspect-video overflow-hidden rounded-xl bg-black shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
      dangerouslySetInnerHTML={{
        __html: `${preview}<button type="button" data-play aria-label="${escapeAttr(label)}" onclick="${escapeAttr(play)}" class="absolute inset-0 z-10 cursor-pointer">${playerChrome(escapeAttr(title), escapeAttr(duration))}</button><button type="button" data-stop hidden aria-label="Stop video" onclick="${escapeAttr(stop)}" class="absolute top-3 right-3 z-20 grid size-10 cursor-pointer place-items-center rounded-full bg-black/80 text-white ring-1 ring-white/70"><svg viewBox="0 0 24 24" class="size-4 fill-current" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="1" /></svg></button>`,
      }}
    />
  );
}
