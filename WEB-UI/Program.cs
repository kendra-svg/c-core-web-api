var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddHttpContextAccessor();

builder.Services.AddSession(session =>
{
    session.Cookie.Name = "simepci-cookie";
    session.IdleTimeout = TimeSpan.FromSeconds(60);
    session.Cookie.HttpOnly = true; //Esto indica que el sitio va a ser solo http, y que no va a responder a scripting
    session.Cookie.IsEssential = false; //Esto indica que la cookie es esencial o no para el funcionamiento del sitio
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.UseSession();
app.Run();
