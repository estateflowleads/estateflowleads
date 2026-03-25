type BookingWidgetProps = {
  bookingLink?: string;
};

function buildEmbedUrl(bookingLink: string): string {
  if (bookingLink.includes("calendly.com")) {
    try {
      const url = new URL(bookingLink);
      if (!url.searchParams.has("embed")) {
        url.searchParams.set("embed", "true");
      }
      return url.toString();
    } catch {
      return bookingLink.includes("embed")
        ? bookingLink
        : `${bookingLink}${bookingLink.includes("?") ? "&" : "?"}embed=true`;
    }
  }
  return bookingLink.includes("embed")
    ? bookingLink
    : `${bookingLink}${bookingLink.includes("?") ? "&" : "?"}embed=true`;
}

export function BookingWidget({ bookingLink }: BookingWidgetProps) {
  if (!bookingLink) {
    return null;
  }

  const iframeUrl = buildEmbedUrl(bookingLink);

  return (
    <div className="mx-auto w-full max-w-3xl rounded-xl border border-slate-800 bg-slate-900/70 p-3 shadow-sm shadow-black/30">
      <iframe
        src={iframeUrl}
        title="Kalendarz rezerwacji rozmowy"
        className="h-[620px] w-full rounded-lg border-0"
        loading="lazy"
      />
    </div>
  );
}
