"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        // Your TypeScript logic goes here
        this.items = null;
        this.url = "https://www.kannammacooks.com/wp-json/wp/v2/posts?_embed&per_page=20";
        console.log("Hello Gokul");
        this.http.get(this.url)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.items = data;
        });
        console.dir(this.items);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: './app.component.html'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsc0NBQXdEO0FBQ3hELGlDQUErQjtBQU0vQjtJQUtFLHNCQUFvQixJQUFVO1FBQTlCLGlCQVNDO1FBVG1CLFNBQUksR0FBSixJQUFJLENBQU07UUFKOUIsa0NBQWtDO1FBQ2xDLFVBQUssR0FBUSxJQUFJLENBQUM7UUFDbEIsUUFBRyxHQUFXLHNFQUFzRSxDQUFDO1FBR25GLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBRTthQUN4QixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDYixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFkVSxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUMsc0JBQXNCO1NBQ25DLENBQUM7eUNBTTBCLFdBQUk7T0FMbkIsWUFBWSxDQWV4QjtJQUFELG1CQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGVVcmw6Jy4vYXBwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAvLyBZb3VyIFR5cGVTY3JpcHQgbG9naWMgZ29lcyBoZXJlXG4gIGl0ZW1zOiBhbnkgPSBudWxsO1xuICB1cmw6IHN0cmluZyA9IFwiaHR0cHM6Ly93d3cua2FubmFtbWFjb29rcy5jb20vd3AtanNvbi93cC92Mi9wb3N0cz9fZW1iZWQmcGVyX3BhZ2U9MjBcIjsgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgY29uc29sZS5sb2coXCJIZWxsbyBHb2t1bFwiKTtcbiAgICBcbiAgICB0aGlzLmh0dHAuZ2V0KCB0aGlzLnVybCApXG4gICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgdGhpcy5pdGVtcyA9IGRhdGE7XG4gICAgfSk7XG4gICAgY29uc29sZS5kaXIodGhpcy5pdGVtcyk7XG4gIH1cbn1cbiJdfQ==