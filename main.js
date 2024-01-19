$(".navbar a").on("click", function (e) {
  e.preventDefault();

  const hash = this.hash;
  const targetOffset = $(hash).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset,
    },
    800,
    function () {
      // Snap effect
      const snapThreshold = 100; // You can adjust this value
      const snappedOffset =
        Math.round(targetOffset / snapThreshold) * snapThreshold;

      $("html, body").animate({ scrollTop: snappedOffset }, 200);
    }
  );
});
