export default function FloatingField({ label, register, name, type = "text", error, textarea, ...rest }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <Tag
        id={name}
        type={textarea ? undefined : type}
        placeholder=" "
        rows={textarea ? 4 : undefined}
        {...register(name)}
        {...rest}
        className={`peer w-full rounded-2xl bg-white/60 border ${
          error ? "border-red-400" : "border-white/70"
        } px-4 pt-6 pb-2.5 text-sm text-bark placeholder-transparent outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none`}
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-4 text-bark/50 text-sm transition-all duration-200
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-bark/50
          peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-primary
          peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px]"
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-xs mt-1 ml-1">{error.message}</p>}
    </div>
  );
}
